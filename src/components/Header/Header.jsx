import { Navigation } from 'components/Navigation/Navigation';
import { CustomizedContainer, CustomizedHeader } from './Header.styled';

export const Header = () => {
  return (
    <CustomizedHeader>
      <CustomizedContainer>
        <Navigation />
      </CustomizedContainer>
    </CustomizedHeader>
  );
};
