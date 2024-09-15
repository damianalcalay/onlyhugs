// components/PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="mb-4">
        En <strong>ONLYHXGS S.L.</strong> (en adelante, “la Agencia”), nos
        comprometemos a proteger y respetar la privacidad de nuestros usuarios.
        Esta Política de Privacidad describe cómo recopilamos, utilizamos y
        protegemos la información personal que proporcionas al utilizar nuestra
        página web y formulario de contacto.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        1. Información que Recopilamos
      </h2>
      <p className="mb-4">
        Cuando visitas nuestra página web y decides completar el formulario de
        contacto, podemos recopilar la siguiente información personal:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Nombre</li>
        <li>Correo electrónico</li>
        <li>Número de teléfono</li>
        <li>Empresa o cargo (opcional)</li>
        <li>
          Cualquier otra información que decidas incluir en el mensaje enviado a
          través del formulario de contacto
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        2. Cómo Utilizamos la Información
      </h2>
      <p className="mb-4">
        La información recopilada se utilizará únicamente para los siguientes
        fines:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Contactar contigo:</strong> Utilizamos tus datos para ponernos
          en contacto contigo y responder a tus solicitudes o consultas.
        </li>
        <li>
          <strong>Organizar reuniones o llamadas:</strong> Tus datos nos
          permiten agendar reuniones o llamadas para discutir los servicios que
          ofrecemos.
        </li>
        <li>
          <strong>Mejorar nuestros servicios:</strong> Los datos nos ayudan a
          mejorar nuestra oferta de servicios y la experiencia de usuario en
          nuestro sitio web.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        3. Cómo Protegemos Tu Información
      </h2>
      <p className="mb-4">
        Nos tomamos en serio la seguridad de tu información. Implementamos
        medidas técnicas y organizativas adecuadas para proteger tu información
        personal contra el acceso no autorizado, la divulgación, la alteración o
        la destrucción.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        4. Compartir Información con Terceros
      </h2>
      <p className="mb-4">
        La Agencia no venderá, distribuirá ni alquilará tu información personal
        a terceros. Sin embargo, podemos compartir tu información con
        proveedores de servicios que nos ayuden en la operación del sitio web o
        en la organización de las reuniones, siempre y cuando estos terceros se
        comprometan a mantener tu información confidencial y a utilizarla
        únicamente para los fines para los que fue compartida.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Tus Derechos</h2>
      <p className="mb-4">Tienes derecho a:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Acceder, rectificar o eliminar la información personal que hemos
          recopilado.
        </li>
        <li>
          Retirar tu consentimiento en cualquier momento para el uso de tu
          información personal.
        </li>
        <li>
          Solicitar que no procesemos tus datos con fines de marketing o de
          contacto si así lo prefieres.
        </li>
      </ul>
      <p className="mb-4">
        Para ejercer cualquiera de estos derechos, puedes ponerte en contacto
        con nosotros a través del correo electrónico{" "}
        <a href="mailto:ONLYHXGS@soporte.com" className="text-blue-500">
          [correo electrónico de contacto]
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Conservación de Datos</h2>
      <p className="mb-4">
        Mantendremos tus datos personales durante el tiempo necesario para
        cumplir con los fines establecidos en esta Política de Privacidad, o
        durante el tiempo que la ley lo exija.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        7. Enlaces a Otros Sitios Web
      </h2>
      <p className="mb-4">
        Nuestro sitio web puede contener enlaces a sitios web de terceros. No
        nos hacemos responsables de las políticas de privacidad o del contenido
        de estos sitios externos.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        8. Modificaciones a esta Política de Privacidad
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar esta Política de Privacidad en
        cualquier momento. Cualquier cambio será publicado en esta página y
        entrará en vigor inmediatamente. Te recomendamos que revises esta página
        periódicamente para mantenerte informado sobre cómo protegemos tu
        información.
      </p>

      <h2 className="text-2xl font-semibold mb-2">9. Contacto</h2>
      <p className="mb-4">
        Si tienes preguntas o inquietudes acerca de nuestra Política de
        Privacidad, no dudes en contactarnos a través de:
      </p>
      <p className="mb-4">
        Correo electrónico:{" "}
        <a href="mailto:ONLYHXGS@soporte.com" className="text-blue-500">
          [correo electrónico de contacto]
        </a>
      </p>

      <p className="text-sm text-gray-500">
        Fecha de última actualización: 11 de septiembre del 2024
      </p>
    </div>
  );
};

export default PrivacyPolicy;
