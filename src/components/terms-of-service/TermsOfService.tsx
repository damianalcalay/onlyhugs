// components/TermsOfService.js
import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Términos de Servicio</h1>
      <p className="mb-4">
        Bienvenido a <strong>BLUEBELBET</strong>. Al acceder a nuestro sitio web y utilizar nuestros
        servicios, aceptas cumplir con estos Términos de Servicio. Si no estás de acuerdo con alguno
        de los términos aquí expuestos, te pedimos que no utilices nuestro sitio web o nuestros
        servicios.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Aceptación de los Términos</h2>
      <p className="mb-4">
        Al utilizar este sitio web, confirmas que has leído, comprendido y aceptas cumplir con estos
        Términos de Servicio. Nos reservamos el derecho de modificar estos términos en cualquier
        momento, y cualquier cambio será publicado en esta página.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Uso del Sitio Web</h2>
      <p className="mb-4">
        Este sitio web está destinado exclusivamente a usuarios que desean obtener información sobre
        nuestros servicios y contactarnos a través del formulario. El uso no autorizado de este
        sitio web está prohibido, lo que incluye, pero no se limita a, intentos de acceder a áreas
        restringidas, modificar el contenido del sitio o utilizar el sitio web para cualquier
        propósito ilegal.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Propiedad Intelectual</h2>
      <p className="mb-4">
        Todo el contenido de este sitio web, incluidos textos, gráficos, logotipos, imágenes, videos
        y cualquier otro material, es propiedad de <strong>BLUEBELBET</strong> o de sus licenciantes
        y está protegido por las leyes de propiedad intelectual. No puedes utilizar, copiar,
        reproducir o distribuir ningún contenido sin nuestro previo consentimiento por escrito.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Enlaces a Sitios de Terceros</h2>
      <p className="mb-4">
        Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se
        proporcionan únicamente para tu conveniencia. No somos responsables del contenido o las
        prácticas de privacidad de esos sitios externos, y el acceso a ellos es bajo tu propio
        riesgo.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Limitación de Responsabilidad</h2>
      <p className="mb-4">
        No garantizamos que el sitio web esté siempre disponible o que esté libre de errores. En la
        medida permitida por la ley, no seremos responsables de ningún daño directo, indirecto,
        incidental o consecuente que resulte del uso o la imposibilidad de uso del sitio web.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Modificaciones al Sitio y Servicios</h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar o descontinuar el sitio web y cualquier servicio
        relacionado, ya sea temporal o permanentemente, en cualquier momento y sin previo aviso. No
        seremos responsables ante ti o terceros por cualquier modificación, suspensión o
        interrupción del servicio.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Privacidad</h2>
      <p className="mb-4">
        El uso de nuestros servicios también está sujeto a nuestra{" "}
        <a href="/politica-de-privacidad" className="text-blue-500">
          Política de Privacidad
        </a>
        . Te recomendamos que revises nuestra Política de Privacidad para obtener más información
        sobre cómo manejamos tus datos personales.
      </p>

      <h2 className="text-2xl font-semibold mb-2">8. Ley Aplicable</h2>
      <p className="mb-4">
        Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes del país
        donde opera <strong>BLUEBELBET</strong>. Cualquier disputa relacionada con estos términos
        será resuelta en los tribunales de esa jurisdicción.
      </p>

      <h2 className="text-2xl font-semibold mb-2">9. Contacto</h2>
      <p className="mb-4">
        Si tienes preguntas o inquietudes acerca de estos Términos de Servicio, no dudes en
        contactarnos a través del correo electrónico:
      </p>
      <p className="mb-4">
        Correo electrónico:{" "}
        <a href="mailto:BLUEBELBET@soporte.com" className="text-blue-500">
          [correo electrónico de contacto]
        </a>
      </p>

      <p className="text-sm text-gray-500">Fecha de última actualización: [Fecha]</p>
    </div>
  );
};

export default TermsOfService;
