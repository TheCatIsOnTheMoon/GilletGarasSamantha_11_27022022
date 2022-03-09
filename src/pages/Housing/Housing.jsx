import HousePage from '../../components/HousingContent/HousingContent';
import data from '../../data/data.json';
import { useLocation } from 'react-router-dom';
import Error from '../Error/Error';

function Housing() {
  const sampleLocation = useLocation();
  // console.log(sampleLocation.pathname) // result : /housing/c67ab8a7
  let urlParamID = sampleLocation.pathname.substring(9);
  // console.log(urlParam) // result : c67ab8a7
  let clickedHouse = data.filter((house) => house.id === urlParamID);
  //console.log(clickedHouse); // if bad id in url : Array [] lenght: 0
  if (clickedHouse.length === 0) {
    return (
      <div>
        <Error />
      </div>
    );
  }
  return (
    <div>
      {clickedHouse.map((house, index) => (
        <HousePage
          key={house.id}
          id={house.id}
          title={house.title}
          pictures={house.pictures}
          description={house.description}
          hostName={house.host.name}
          hostPicture={house.host.picture}
          rating={house.rating}
          location={house.location}
          equipments={house.equipments}
          tags={house.tags}
        />
      ))}
    </div>
  );
}

export default Housing;
