import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

export default function CategorySelector({ selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="w-64">
      <Listbox value={selectedCategory} onChange={setSelectedCategory}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-white/10 backdrop-blur-md py-2 pl-4 pr-10 text-left text-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20">
            <span className="block truncate">
              {selectedCategory || "Select Category"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-5 w-5 text-white/70" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-xl bg-gray-900/90 backdrop-blur-md py-2 z-50 text-white shadow-lg border border-white/20 focus:outline-none">
              <Listbox.Option
                value="all"
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-purple-500/30 text-purple-200" : "text-gray-200"
                  }`
                }
              >
                All Categories
              </Listbox.Option>
              {categories.map((cat, idx) => (
                <Listbox.Option
                  key={idx}
                  value={cat}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-purple-500/30 text-purple-200" : "text-gray-200"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-purple-300" : "font-normal"
                        }`}
                      >
                        {cat}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-400">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
