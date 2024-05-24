import Image from "next/image";

export default function AffiliatedPage() {
  return (
    <div>
      <article className="group">
        <img
          alt=""
          src="/iloilo provincial.jpg"
          className="h-50 w-50 rounded-xl shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
              Iloilo Pronvincial Libary and Archives
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Public Library and Archives of the Iloilo Province, located at 1F
            Casa Real de Iloilo, Iloilo City
          </p>
        </div>
      </article>
      <div>
        <article className="group">
          <img
            alt=""
            src="/iloilo city.jpg"
            className="h-50 w-50 rounded-xl shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Iloilo City Public Library
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              The Iloilo City Public Library has a simple but unique interior
              design but it is a home for readers and researchers of the city.
              Our service is beyond books and reading materials. We offer
              internet and Wi-Fi services, storytelling, and information.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
