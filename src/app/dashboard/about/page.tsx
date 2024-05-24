import { CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div>
      <img
        alt=""
        src="/lidomW.png"
        className="h-50 w-50 rounded-xl shadow-xl transition group-hover:grayscale-[50%]"
      />

      <h1 className="text-base bold flex justify-center items-center text-center">
        LiDom, short for "Library in your Domain," is a web-based Library and
        Book Recommendation System designed to enhance the reading experience
        for residents of Iloilo City. LiDom offers book recommendations and
        facilitates easy book search and discovery. The system ensures that the
        library inventory is classified and organized for easy navigation,
        convenience, and security.
      </h1>

      <CardTitle>Meet the Team</CardTitle>
    </div>
  );
}
