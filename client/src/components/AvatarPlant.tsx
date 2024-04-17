import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarPlant() {
  return (
    <Avatar>
      <AvatarImage src='/plant_avatar.png' alt="plant" />
      <AvatarFallback>LU</AvatarFallback>
    </Avatar>
  )
}
