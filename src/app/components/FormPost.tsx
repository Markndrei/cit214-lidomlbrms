"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { FormInputPost } from "../types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Radio } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
  initialValue?: FormInputPost;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing, initialValue }) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });

  //fetch list tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });

  return (
    <div className="grid items-start gap-8 w-auto">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Add Book</h1>
          <p className="text-lg text-muted-foreground">
            Add Books to the Inventory
          </p>
        </div>
      </div>
      <Card>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col items-center justify-center gap-5 w-screen"
        >
          <CardContent>
            <div className="space-y-2">
              <div className="space-y-1 w-screen">
                <Label>Book Title</Label>
                <Input
                  type="text"
                  {...register("bookTitle", { required: true })}
                  placeholder="Book title..."
                />
              </div>
              <div className="space-y-1">
                <Label>Book Author</Label>
                <Input
                  type="text"
                  {...register("bookAuthor", { required: true })}
                  placeholder="Author"
                />
                <div className="space-y-1">
                  <Label>ISBN</Label>
                  <Input
                    type="text"
                    {...register("ISBN", { required: true })}
                    placeholder="ISBN"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Year of Publication</Label>
                  <Input
                    type="text"
                    {...register("yearOfPublication", { required: true })}
                    placeholder="Publication Year"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Publisher</Label>
                  <Input
                    type="text"
                    {...register("publisher", { required: true })}
                    placeholder="Publisher"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Image URL</Label>
                  <Input
                    type="text"
                    {...register("imageUrlM", { required: true })}
                    placeholder="Book Image URL (http://image.address) "
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Button
                  type="submit"
                  className="btn btn-primary w-full max-w-lg"
                >
                  {isEditing ? "Update" : "Add"}
                </Button>
              </div>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default FormPost;
