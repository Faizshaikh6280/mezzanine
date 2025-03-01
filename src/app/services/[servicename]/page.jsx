import { serviceslinks } from "@/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return serviceslinks.map((service) => ({
    service: service.id, // Must match the dynamic route [service]
  }));
}

export default function ServicePage({ params }) {
  if (!params) return null; // Ensure params exist before using it
  const service = serviceslinks.find((s) => s.id === params.servicename);
  console.log(service);

  if (!service) {
    return notFound(); // Show 404 if service not found
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
}
