import Link from "next/link";
import React from "react";
import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";

const ButtonAction = () => {
  return (
    <div>
      <Link href="/edit/1" className="btn mr-2">
        <SquarePen />
      </Link>
      <button className="btn btn-error">
        <Trash2 />
      </button>
    </div>
  );
};

export default ButtonAction;
