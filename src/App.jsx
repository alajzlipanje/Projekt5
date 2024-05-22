import { useEffect, useState } from "react";
import School from "./School";
import { Input } from "@/components/ui/input";

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
  const [SelObcina, setSelObcina] = useState("");
  const [search, setSearch] = useState("");

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
          <Select onValueChange={(value) => setSelObcina(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Občina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Vse občine</SelectItem>

              {obcine.map((obcina) => (
                <SelectItem value={obcina}>{obcina}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input />
          {/* Dodaj input, ki bo omogčal iskanje po poštni številki. Ne pozabi na onChange event. */}
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-2">
          {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse šole in jih prikazala v obliki kartic. */}
          {/* Dodaj dva filtra: enega za filtriranje po obcini, drugega za filtriranje glede na poštno številko šole. */}
          {data
            .filter(
              (school) =>
                school.postna_stevilka.toString().startsWith(search) ==
                  search || search == "",
            )
            .filter(
              (school) => school.obcina == SelObcina || SelObcina == "all",
            )
            .map((school) => (
              <div>
                <School data={school}></School>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
