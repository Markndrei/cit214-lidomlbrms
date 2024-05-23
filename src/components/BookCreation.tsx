"use client";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookCreationInput } from "../types";

interface BookCreationProps {
  submit: SubmitHandler<BookCreationInput>;
  isEditing: boolean;
}

const BookCreation: FC<BookCreationProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<BookCreationInput>();
  return (
    <form
      className="flex flex-col items-center jutify-center gap-5 mt-10"
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        {...(register("title"), { required: true })}
        placeholder="Title"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        {...(register("author"), { required: true })}
        placeholder="Author"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        {...(register("ISBN"), { required: true })}
        placeholder="ISBN"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        {...(register("location"), { required: true })}
        placeholder="location"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        {...(register("publicationYear"), { required: true })}
        placeholder="publication Year"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        {...(register("publisher"), { required: true })}
        placeholder="publisher"
        className="input input-bordered w-full max-w-xs"
      />
      <select
        {...(register("library"), { required: true })}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          Library
        </option>
        <option>Iloilo Pronvincial Library and Archives</option>
        <option>Iloilo City Public Library</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default BookCreation;
