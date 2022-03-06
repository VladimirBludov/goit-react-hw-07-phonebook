import PropTypes from 'prop-types';
import { Container, Ellips } from './Loader.styles';

export default function Loader({ absolute = false, size = null }) {
  return (
    <Container absolute={absolute} size={size}>
      <Ellips></Ellips>
      <Ellips></Ellips>
      <Ellips></Ellips>
      <Ellips></Ellips>
    </Container>
  );
}

Loader.propTypes = {
  absolute: PropTypes.bool,
};
