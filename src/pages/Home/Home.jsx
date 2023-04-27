import { HomeTitle, HomeTitleBox } from './Home.styled';
import ParticlesLines from 'components/ParticlesLines/ParticlesLines';
import Weather from 'components/WeatherApp/WeatherApp';

const HomePage = () => {
  return (
    <HomeTitleBox>
      <ParticlesLines />
      <Weather />
      <HomeTitle>
        Hello, this web application will allow you to store your contacts in
        your personal account after registration.
        <br /> Register and enjoy =)
      </HomeTitle>
    </HomeTitleBox>
  );
};

export default HomePage;
