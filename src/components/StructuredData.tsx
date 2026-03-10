export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "YachayIA Digital",
        "image": "https://yachayia.digital/icon.png",
        "@id": "https://yachayia.digital",
        "url": "https://yachayia.digital",
        "telephone": "+593 998754464",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Salasaca",
            "addressLocality": "Tungurahua",
            "addressRegion": "Andes",
            "addressCountry": "EC"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.3323,
            "longitude": -78.5670
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://facebook.com/yachayia",
            "https://instagram.com/yachayia",
            "https://linkedin.com/company/yachayia"
        ],
        "description": "Agencia global de IA y Automatización con raíces en Salasaca, Ecuador. Expertos en soluciones personalizadas, sistemas financieros y transformación digital para PYMES.",
        "brand": {
            "@type": "Brand",
            "name": "YachayIA Digital",
            "slogan": "Transformación Digital con Sabiduría"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
