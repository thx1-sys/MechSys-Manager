import PropTypes from "prop-types";

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-transparent p-6 rounded-lg shadow-lg text-white border border-[#757575] transform transition duration-500 hover:scale-105 hover:shadow-gray-lg hover:bg-black hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg group">
      {imageUrl && (
        <div className="w-full h-48 mb-4 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain rounded-t-lg filter grayscale transition duration-500 group-hover:filter-none"
          />
        </div>
      )}
      <h4 className="text-2xl font-bold mb-4 text-[#F0F0F0]">{title}</h4>
      <p className="text-lg text-[#757575]">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export { FeatureCard };
