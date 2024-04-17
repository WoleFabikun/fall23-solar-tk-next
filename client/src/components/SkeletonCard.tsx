import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <Skeleton className="lg:h-[450px] lg:w-[650px] h-[350px] w-[550px] rounded-xl" />
    </div>
  )
}
