"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
// import { urlForImage } from "@/sanity/lib/image"

// import { SanityProduct } from "@/config/inventory"
// import { shimmer, toBase64 } from "@/lib/image"

interface ProductGalleryProps {
  productImg: {
    images: string[];
  };
}

export function ProductGallery({ productImg }: ProductGalleryProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log(productImg);
  const [selectedImage, setImage] = useState(0);
  return (
    <div className="flex flex-col-reverse">
      {/* Image Grid */}
      <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none px-6">
        <ul className="grid grid-cols-4 gap-6">
          {productImg.images.map((image: any, index: number) => (
            <div
              key={index}
              onClick={() => setImage(index)}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt="img here"
                  className="h-full w-full object-cover object-center"
                  //   placeholder="blur"
                />
              </span>
              {/* <span
                  className="pointer-events-none absolute inset-0 rounded-md ring-4 ring-indigo-500 ring-offset-2"
                  aria-hidden="true"
                /> */}
            </div>
          ))}
        </ul>
      </div>

      {/* Main Image */}
      <div className="aspect-h-1 aspect-w-1 w-full">
        <Image
          priority
          src={productImg.images[selectedImage]}
          //   alt={`Main ${product.name} image`}
          alt="img here"
          width={600}
          height={750}
          onClick={onOpen}
          className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
          //   placeholder="blur"
        />

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          size="2xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="flex justify-center">
                    <Image
                      src={productImg.images[selectedImage]}
                      alt="Selected Product Image"
                      width={8000} // Adjust width as needed
                      height={10000} // Adjust height as needed
                      className="object-cover"
                      //   placeholder="blur" // Uncomment if you use blur placeholder
                    />
                  </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
