import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function School(props) {
  const { regija, obcina, naziv, naslov, postna_stevilka, posta, email } =
    props.data;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{naziv}</CardTitle>
          <CardDescription>{regija}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Naslov: {naslov}</p>
        </CardContent>
        <CardFooter>
          <p className="">
            E-poštni naslov: <a href={`mailto: ${email}`}>{email}</a>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
