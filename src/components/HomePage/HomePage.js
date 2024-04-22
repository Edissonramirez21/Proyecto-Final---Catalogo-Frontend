import { Link } from "react-router-dom";
import HomeCategories from "./HomeCategories";
import HomeProductTrending from "./HomeProductTrending";

const offers = [
  {
    name: "Descargar la app",
    description: "Obtén un código exclusivo de descuento de $5",
    href: "#",
  },
  {
    name: "Regrese cuando esté listo",
    description: "60 días de devoluciones gratis",
    href: "#",
  },
  {
    name: "Suscríbase a nuestro boletín de noticias",
    description: "15% de descuento en su primer pedido",
    href: "#",
  },
];

const perks = [
  {
    name: "Devoluciones gratuitas",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "¿No es lo que esperaba? Vuelva a introducirlo en el paquete y adjunte el sello de envío prepagado.",
  },
  {
    name: "Entrega el mismo día",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "Ofrecemos un servicio de entrega que nunca se ha hecho antes. Haga su pedido hoy mismo y reciba sus productos en cuestión de horas.",
  },
  {
    name: "Descuentos todo el año",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      '¿Buscas una oferta? Utiliza el código "ALLYEAR" al pasar por caja y consigue descuentos durante todo el año.',
  },
  {
    name: "Para el planeta",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "Nos hemos comprometido a destinar el 1% de las ventas a la conservación y restauración del entorno natural.",
  },
];
export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="mx-auto max-w-7xl lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
              >
                {offers.map((offer) => (
                  <li key={offer.name} className="flex flex-col">
                    <a
                      href={offer.href}
                      className="relative flex flex-1 flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                    >
                      <p className="text-sm text-gray-500">{offer.name}</p>
                      <p className="font-semibold text-gray-900">
                        {offer.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      Compre con confianza
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      Cada semana se añaden nuevos productos. Visítenos a menudo para comprobarlo
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                      >
                        Productividad de la tienda
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                src="https://img.freepik.com/free-photo/happy-businesswoman-using-smart-phone-credit-card-while-shopping-internet-night-office_637285-2594.jpg?w=826&t=st=1702492687~exp=1702493287~hmac=36a42bbf213ad9b754a638ef4ac0e83b5169cfbbdeaeb9a57cfa3d2e9c53e0ef"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Sale */}
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                Obtenga un 25% de descuento durante nuestra venta exclusiva
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                La mayoría de nuestros productos son lanzamientos limitados que no volverán.
                Consigue tus artículos favoritos mientras estén en stock.
              </p>
              <a
                href="#"
                className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
              >
                 Acceda a nuestra oferta única
              </a>
            </div>
          </section>
        </div>
      </main>
      <main>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Comprar por categoría
            </h2>
            <Link
              to="/all-categories"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
               Navegar por todas las categorías
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          {/* home categories */}
          <HomeCategories />
        </section>
        {/* Home trending trending */}
        <HomeProductTrending />

        {/* info */}
        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <h2 id="perks-heading" className="sr-only">
            Nuestros beneficios
          </h2>

          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-24 w-auto"
                        src={perk.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
