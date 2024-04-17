"use client"

import { InputWithButton } from "./UserInput"
import { Card,
  CardContent,
  CardHeader,
  CardTitle, } from "./ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"
import ChatCard from "./ChatCard"
import ReactPlayer from 'react-player'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { SkeletonCard } from "@/components/SkeletonCard"

type CardProps = React.ComponentProps<typeof Card>

const Chat = ({ className, ...props }: CardProps) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setIsLoading] = useState(false);


  const sendMessage = async () => {
    if (!query.length || loading) return;
    setIsLoading(true);

    try {
      const responsePromise = fetch('http://localhost:8080/search_query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const videoPromise = fetch('http://localhost:8080/search_video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const [responseData, videoData] = await Promise.all([
        responsePromise.then((res) => res.json()),
        videoPromise.then((res) => res.json()),
      ]);

      setResponse(responseData.response);
      setVideoUrl(videoData.stream_url);
      setQuery('');
    } catch (error) {
      console.error('Error searching:', error);
    }

    setIsLoading(false);
  };


  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value ?? "")
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault() // Prevent the default newline behavior of the Enter key
      sendMessage()
    }
  }

  //messages example for testing the ui
  const responseTest = "This is a test response"


  return (
    <div className="-mt-10 h-full flex flex-col items-center justify-center">
      <div>
        <Card
          className={cn("lg:w-[800px] md:w-[650px] sm:w-[500px] w-[500px]", className)}
          {...props}
        >
          <CardHeader>
          </CardHeader>
          <CardContent className="grid gap-4 h-full w-full">
            {loading ? (
              <SkeletonCard />
            ) : (
              <div className="flex items-center rounded-md border ">
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
                </AspectRatio>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="pt-6">
        <ChatCard response={response} />
      </div>
      <div className="flex flex-col w-full items-center pt-6">
        <InputWithButton
          value={query}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onSubmit={sendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Chat