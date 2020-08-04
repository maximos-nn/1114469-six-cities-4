const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();

const parseOffers = (rawOffers) => {
  return rawOffers.map((offer) => ({
    id: offer.id,
    title: offer.title,
    type: capitalizeFirstLetter(offer.type),
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
      avatar: offer.host.avatar_url,
      isSuper: offer.host.is_pro
    },
    photos: offer.images,
    location: [offer.location.latitude, offer.location.longitude],
    // zoom: offer.location.zoom,
    city: {
      name: offer.city.name,
      location: [offer.city.location.latitude, offer.city.location.longitude],
      zoom: offer.city.location.zoom
    }
  }));
};

export {parseOffers};
