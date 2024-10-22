import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'
const Tours = () => {
  
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        
        {tours.map((tour) => {
          // const { id, image, title, info, location, cost, duration } = tour
          // return <Tour {...tour} />
          return <Tour key={tour.id} {...tour} />
          // return <Tour image={tour.image} title={tour.title} info={tour.info} location={tour.location} cost={tour.cost} duration={tour.duration} key={tour.id} />
          // return <Tour image={image} title={tour.title} info={tour.info} location={tour.location} cost={tour.cost} duration={tour.duration} key={tour.id} />
        })}
      </div>
    </section>
  )
}
export default Tours
