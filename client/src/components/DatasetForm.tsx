import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MultiSelectFormField from "@/components/ui/multi-select";

const formSchema = z.object({
  selectedDataset: z.string(),
  selectedYears: z.array(z.string()),
  selectedIntervals: z.array(z.string()),
});

type DatasetFormValues = z.infer<typeof formSchema>;

type DatasetFormProps = {
  onSubmit: (data: DatasetFormValues) => void;
  datasetOptions: string[];
  years: (number | string)[][];
  intervals: (number | string)[][];
};

export function DatasetForm({
  onSubmit,
  datasetOptions,
  years,
  intervals,
}: DatasetFormProps) {
  const form = useForm<DatasetFormValues>({
    resolver: zodResolver(formSchema),
  });

  const selectedDataset = useWatch({
    control: form.control,
    name: "selectedDataset",
  });

  const datasetIndex = datasetOptions.findIndex(
    (option) => option === selectedDataset
  );

  const availableYears = datasetIndex !== -1 ? years[datasetIndex] : [];
  const availableIntervals = datasetIndex !== -1 ? intervals[datasetIndex] : [];

  const yearOptions = availableYears.map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));

  const intervalOptions = availableIntervals.map((interval) => ({
    label: interval.toString(),
    value: interval.toString(),
  }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="selectedDataset"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dataset</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a dataset" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {datasetOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="selectedYears"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years</FormLabel>
              <MultiSelectFormField
                options={yearOptions}
                placeholder="Select years"
                onValueChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="selectedIntervals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Intervals</FormLabel>
              <MultiSelectFormField
                options={intervalOptions}
                placeholder="Select intervals"
                onValueChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}