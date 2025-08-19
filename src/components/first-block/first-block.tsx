import {Share} from "lucide-react"
import Image from "next/image";
import { Course } from "./course";
import { Teachers } from "./teachers";



export function FirstBlock() {
  return (
    <div className="grid grid-cols-6 gap-6">
        <div className="col-span-4">
            <Course/>
        </div>
        
        <div className="col-span-2">
            <Teachers/>
        </div>
    </div>
  );
}  