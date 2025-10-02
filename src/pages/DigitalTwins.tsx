import { useState } from "react";
import InteractiveModelWrapper from "../components/InteractiveModelWrapper";

const models = [
   { name: "Jet Engine", path: "/jet_engine.glb" },
   { name: "Jet Engine", path: "/jet_engine.glb" },
   { name: "Car Engine", path: "/car_engine.glb" }, // add more
];

export default function DigitalTwins() {
   const [selectedModel, setSelectedModel] = useState(models[0].path);

   return (
      <div className="w-full h-screen flex flex-col">
         {/* Model selection buttons */}
         <div className="p-4 flex gap-4 bg-gray-900">
            {models.map((model) => (
               <button
                  key={model.name}
                  onClick={() => setSelectedModel(model.path)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                     selectedModel === model.path
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-300"
                  }`}
               >
                  {model.name}
               </button>
            ))}
         </div>

         {/* 3D Model Viewer */}
         <div className="flex-1">
            <InteractiveModelWrapper modelPath={selectedModel} />
         </div>
      </div>
   );
}
