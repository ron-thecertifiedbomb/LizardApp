import { View, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import Swiper from 'react-native-easy-swiper';
import React from 'react';
import PropTypes from 'prop-types';

interface CarouselProps {
  images: string[];
  height?: number;
  horizontal?: boolean;
  dotStyle?: ViewStyle;
  dotSpacing?: number;
  imagesStyles?: ImageStyle;
  dotColor?: string;
  activeDashSize?: number;
  animations?: ('scale' | 'fade')[] | undefined
  dotPosition?: 'left' | 'right' | 'top' | 'bottom';
}
const Carousel: React.FC<CarouselProps> = ({
  images,
  height = 200,
  horizontal = false,
  dotStyle = { width: 4, height: 8 },
  dotSpacing = 5,
  imagesStyles = { resizeMode: 'contain' },
  dotColor = '#CCCCCC',
  activeDashSize = 25,
  animations = ['scale'],
  dotPosition = 'right',
}) => {
  return (
    <View style={[styles.container, { height }]}>
      <Swiper
        horizontal={horizontal}
        height={height}
        images={images}
        dotStyle={dotStyle}
        dotSpacing={dotSpacing}
        imagesStyles={imagesStyles}
        dotColor={dotColor}
        activeDashSize={activeDashSize}
        animations={animations}
        dotPosition={dotPosition}
      />
    </View>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any).isRequired,
  height: PropTypes.number,
  horizontal: PropTypes.bool,
  dotStyle: PropTypes.object,
  dotSpacing: PropTypes.number,
  imagesStyles: PropTypes.object,
  dotColor: PropTypes.string,
  activeDashSize: PropTypes.number,
  animations: PropTypes.arrayOf(PropTypes.any).isRequired,
  dotPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
};


export default Carousel;

const styles = StyleSheet.create({
  container: {
    // height: 200, // Removed to make height configurable via props
  },
});
