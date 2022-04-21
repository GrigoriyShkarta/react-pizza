import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="134" cy="127" r="111" />
        <rect x="0" y="260" rx="6" ry="6" width="280" height="24" />
        <rect x="0" y="297" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="402" rx="6" ry="6" width="90" height="30" />
        <rect x="139" y="394" rx="20" ry="20" width="141" height="44" />
    </ContentLoader>
)

export default Loader