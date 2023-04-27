import { HomeTitle, HomeTitleBox, NavLinkStyled } from './Home.styled';
import ParticlesLines from 'components/ParticlesLines/ParticlesLines';
import Weather from 'components/WeatherApp/WeatherApp';
import { useAuth } from 'hooks';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HomeTitleBox>
      <ParticlesLines />
      <Weather />
      {isLoggedIn ? (
        <HomeTitle>
          Greetings, thank you for registering and showing confidence in us, use
          the contact book with pleasure =)
        </HomeTitle>
      ) : (
        <HomeTitle>
          Hello, this web application will allow you to store your contacts in
          your personal account after
          <NavLinkStyled to="/register"> registration</NavLinkStyled>, and if
          you are already registered, you can{' '}
          <NavLinkStyled to="/login"> log in</NavLinkStyled>.
          <br /> Come and enjoy =)
        </HomeTitle>
      )}
    </HomeTitleBox>
  );
};

export default HomePage;
