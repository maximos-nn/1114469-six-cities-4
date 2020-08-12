import {PlaceType} from "../const";

const parseOffer = (offer) => ({
  id: offer.id,
  title: offer.title,
  type: PlaceType[offer.type.toUpperCase()],
  picture: offer.preview_image,
  price: offer.price,
  rating: offer.rating,
  isBookmarked: offer.is_favorite,
  isPremium: offer.is_premium,
  guests: offer.max_adults,
  bedrooms: offer.bedrooms,
  description: offer.description,
  amenities: offer.goods,
  host: {
    id: offer.host.id,
    name: offer.host.name,
    avatar: `/${offer.host.avatar_url}`,
    isSuper: offer.host.is_pro
  },
  photos: offer.images,
  location: [offer.location.latitude, offer.location.longitude],
  city: {
    name: offer.city.name,
    location: [offer.city.location.latitude, offer.city.location.longitude],
    zoom: offer.city.location.zoom
  }
});

const parseOffers = (rawOffers) => {
  return rawOffers.map(parseOffer);
};

export {parseOffers, parseOffer};
