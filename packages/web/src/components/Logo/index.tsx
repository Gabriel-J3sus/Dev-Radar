import { LogoContainer, LogoSVG } from './style'

interface LogoProps {
  title?: string
  SVGfill: string
  titleColor?: string
  size: string | number
}

export const Logo: React.FC<LogoProps> = ({ SVGfill, title, titleColor, size }) => {
  return (
    <LogoContainer titleColor={titleColor}>
      <LogoSVG
        SVGfill={SVGfill}
        width={size}
        height={size}
        fill="none"
        viewBox=" 0 0 87 87"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M35.3861 43.0751C35.3827 44.1675 35.6069 45.2485 36.0445 46.2494C36.4822 47.2502 37.1235 48.1489 37.9277 48.8881C38.732 49.6273 39.6814 50.1908 40.7155 50.5427C41.7496 50.8945 42.8457 51.0271 43.9339 50.9318C45.0221 50.8365 46.0784 50.5155 47.0357 49.9893C47.9929 49.463 48.8299 48.7431 49.4934 47.8754C50.157 47.0076 50.6324 46.0112 50.8894 44.9495C51.1464 43.8878 51.1793 42.7842 50.9861 41.7091L82.8121 36.0991C83.3747 36.0028 83.9108 35.7897 84.386 35.4737C84.8612 35.1576 85.265 34.7456 85.5713 34.264C85.8776 33.7825 86.0798 33.2421 86.1646 32.6777C86.2495 32.1134 86.2153 31.5375 86.0641 30.9871C83.996 23.6708 80.0848 17.0077 74.7046 11.6356C69.3245 6.26355 62.6555 2.36225 55.3361 0.305137C54.7895 0.153686 54.2173 0.117661 53.6559 0.199353C53.0946 0.281045 52.5564 0.478666 52.0756 0.779646C51.5948 1.08063 51.1819 1.47838 50.8631 1.9476C50.5444 2.41682 50.3267 2.94725 50.2241 3.50514L44.6141 35.3311C43.4825 35.1249 42.3193 35.1706 41.2073 35.4652C40.0954 35.7597 39.062 36.2958 38.1809 37.0353C37.2997 37.7747 36.5925 38.6993 36.1094 39.7433C35.6263 40.7872 35.3794 41.9249 35.3861 43.0751V43.0751Z" />
        <path d="M43.2481 86.3999C53.967 86.4144 64.3094 82.448 72.2698 75.2699C80.2303 68.0917 85.2416 58.2132 86.3321 47.55C86.3944 46.9843 86.3352 46.4119 86.1587 45.8709C85.9821 45.33 85.6921 44.8329 85.3081 44.413C84.9274 43.9899 84.4621 43.6515 83.9425 43.4194C83.4228 43.1874 82.8602 43.067 82.2911 43.066C82.0496 43.0666 81.8087 43.0884 81.5711 43.131C80.6857 43.2927 79.8784 43.7421 79.2745 44.4095C78.6706 45.0768 78.3038 45.9249 78.2311 46.822C77.5362 53.4367 74.9821 59.7195 70.8644 64.9428C66.7468 70.1661 61.234 74.1165 54.9643 76.3365C48.6945 78.5566 41.9242 78.9555 35.4372 77.4872C28.9501 76.0189 23.0115 72.7434 18.3089 68.0398C13.6063 63.3362 10.3319 57.3969 8.86497 50.9095C7.39799 44.4221 7.79835 37.6519 10.0197 31.3827C12.241 25.1134 16.1925 19.6014 21.4167 15.4848C26.6409 11.3683 32.9242 8.81548 39.5391 8.12195C40.5773 8.02449 41.5385 7.53213 42.2243 6.74649C42.91 5.96086 43.268 4.94193 43.2242 3.90004C43.1805 2.85814 42.7384 1.87281 41.9892 1.14744C41.24 0.422065 40.2409 0.0120233 39.1981 0.00195312H38.7741C27.7496 1.17188 17.5932 6.52359 10.3952 14.9555C3.19732 23.3874 -0.494308 34.2578 0.0802398 45.3293C0.654788 56.4008 5.45179 66.8307 13.4838 74.4722C21.5159 82.1138 32.1718 86.3855 43.2581 86.408L43.2481 86.3999Z" />
        <path d="M37.3611 26.2251C38.028 25.9839 38.6187 25.5696 39.0727 25.0249C39.5268 24.4802 39.8279 23.8245 39.9451 23.1251C40.0459 22.5348 40.0154 21.9295 39.8559 21.3523C39.6964 20.775 39.4117 20.24 39.0221 19.7851C38.6479 19.332 38.1787 18.9665 37.6477 18.7146C37.1167 18.4626 36.5368 18.3304 35.9491 18.3272C35.5031 18.3267 35.0603 18.4014 34.6391 18.5481C30.486 20.0015 26.7697 22.4851 23.8382 25.7664C20.9067 29.0476 18.8559 33.0191 17.8777 37.3091C16.8996 41.599 17.0262 46.067 18.2457 50.2947C19.4651 54.5224 21.7376 58.3714 24.8502 61.4814C27.9628 64.5914 31.8137 66.8605 36.0424 68.0764C40.2711 69.2923 44.7393 69.4151 49.0284 68.4334C53.3175 67.4516 57.2873 65.3974 60.566 62.4631C63.8448 59.5288 66.3252 55.8105 67.7751 51.6562C67.986 51.0589 68.0492 50.4195 67.9591 49.7926C67.8691 49.1657 67.6286 48.5699 67.2581 48.0562C66.8809 47.5228 66.3819 47.0872 65.8026 46.7855C65.2233 46.4837 64.5803 46.3245 63.9271 46.3211C63.6857 46.322 63.4448 46.3437 63.2071 46.3861C62.5077 46.5034 61.8521 46.8045 61.3073 47.2585C60.7626 47.7126 60.3484 48.3033 60.1071 48.9701C59.1106 51.8232 57.4063 54.3766 55.1538 56.3913C52.9013 58.406 50.1743 59.816 47.2282 60.4893C44.2822 61.1627 41.2134 61.0773 38.3093 60.2411C35.4053 59.405 32.7609 57.8454 30.624 55.7086C28.487 53.5717 26.9274 50.9274 26.0911 48.0234C25.2548 45.1194 25.1693 42.0506 25.8425 39.1045C26.5157 36.1584 27.9256 33.4314 29.9402 31.1788C31.9548 28.9262 34.5081 27.2218 37.3611 26.2251V26.2251Z" />
      </LogoSVG>
      <h1 style={title ? { marginLeft: '1rem' } : {}}>{title}</h1>
    </LogoContainer>
  )
}
