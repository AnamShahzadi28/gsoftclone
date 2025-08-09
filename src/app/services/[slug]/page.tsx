import ServiceDetails from "@/components/services/ServiceDetails";
import { ServiceDetailPageProps } from "@/types/services";


export default async function ServicePage({ params }: ServiceDetailPageProps) {
  const { slug } =  await params;
  return <ServiceDetails slug={slug} />;
}

