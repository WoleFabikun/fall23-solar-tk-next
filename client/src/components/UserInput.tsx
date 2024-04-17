import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";

interface InputWithButtonProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  loading: boolean;
  placeholder: string; 
}

export function InputWithButton({
  value,
  onChange,
  onKeyDown,
  onSubmit,
  loading,
  placeholder, 
}: InputWithButtonProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button type="submit" onClick={onSubmit} disabled={loading}>
        {loading ? <LoaderCircle className="animate-spin" /> : "Send"}
      </Button>
    </div>
  );
}