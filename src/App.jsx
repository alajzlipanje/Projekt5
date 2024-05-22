import { useEffect, useState } from "react";
import School from "./School";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function App() {
  const [data, setData] = useState([]);
  const [obcine, setObcine] = useState([]);

  async function getSchools() {
    const response = await fetch("http://static.404.si/grace/");
    const data = await response.json();
    setData(data);
  }

  async function getMunicipality() {
    const response = await fetch("http://static.404.si/grace/obcine/");
    const data = await response.json();
    setObcine(data);
  }

  useEffect(() => {
    getSchools();
    getMunicipality();
  }, []);

  return (
    <>
      <div className="container mb-4 mt-4">
        <div className="flex gap-4">
          {/* Ne pozabi na onValueChange event. */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Regija" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Vse občine</SelectItem>
              {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse občine in jih prikazala v obliki SelectItemov. */}
            </SelectContent>
          </Select>

          {/* Dodaj input, ki bo omogčal iskanje po poštni številki. Ne pozabi na onChange event. */}
        </div>
      </div>
      <div className="container">
        <div class="">
          {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse šole in jih prikazala v obliki kartic. */}
          {/* Dodaj dva filtra: enega za filtriranje po obcini, drugega za filtriranje glede na poštno številko šole. */}
          {data.map((school) => (
            <div>
              <School data={school}></School>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
