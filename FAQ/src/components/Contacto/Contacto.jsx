import { ContactoCard } from './ContactoCard';
import './Contacto.scss';


export const Contacto = () => {

  const cards = [
    {
      icon: 'location',
      title: 'Tiendas',
      description: 'Ubica tu tienda más cercana',
      descriptionColor: '#000',
      redirectTo: 'https://www.liverpool.com.mx/tienda/m/browse/store.jsp',

    },
    {
      icon: 'envelope',
      title: 'Contáctanos',
      description: 'Contáctanos vía WhatsApp o por Teléfono al 5552629999 atencion@liverpool.com.mx',
      descriptionColor: '#e10098',
      redirectTo: undefined
    }
  ]

  return (
    <>
    <div className="contact-wrapper">
      {
        cards.map( (card, i) => ( <ContactoCard key={i} config={card}/> ) )
      }
    </div>
    </>
  )
}
