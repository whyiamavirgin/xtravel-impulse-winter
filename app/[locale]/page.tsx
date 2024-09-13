import { TourTitle } from '../components/tourComponents/tourTitle';
import { TourMainBlock } from '../components/tourComponents/tourPage';
 
export default function HomePage() {


    return (
    // <TopNav />
    <div className='h-full w-full'>
        {/* <TitleTourDemo /> */}
        <TourTitle />
        <TourMainBlock />
        {/* <TourDemo /> */}
    </div>
  )
}