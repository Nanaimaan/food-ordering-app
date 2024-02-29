import React from "react";

export default function MenuItem() {
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25">
        <div className="text-center">
          <img className="max-h-auto max-h-24 block mx-auto" src="/pizza.png" />
        </div>
        <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm my-3">
          Lorem ipsum dolor sit amet, cosnfksfn amdsfm elitdccsdvms
          sjdnfjskdvndsk
        </p>
        <button className="bg-primary text-white px-8 py-2 mt-4 rounded-full">
          Add to cart $12
        </button>
      </div>
    </div>
  );
}
