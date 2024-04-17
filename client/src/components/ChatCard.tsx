import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from "@/lib/utils"
import plant from '../../public/plant_avatar.png'
import Image from 'next/image'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarPlant } from './AvatarPlant'

type CardProps = React.ComponentProps<typeof Card>;

export interface ChatCardProps {
  response: string;
  className?: CardProps;
}

const ChatCard = ({ response, className }: ChatCardProps) => {
  return (
    <div>
      <Card className={cn('lg:w-[800px] md:w-[650px] sm:w-[500px] w-[500px]', className)}>
        <CardContent className="grid gap-4 pt-4">
          <div>
            <div className="flex items-center rounded-md border p-4">
              <div className="w-10 h-10">
                <AvatarPlant />
              </div>
              <div className="ml-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{response}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatCard;