export default function Blur(props) {
    return (
      <div className="fixed top-0 left-0 w-full pointer-events-none -z-10" style={{ height: props.height || '150px' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(0.12px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)' }}></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(0.23px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)' }}></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(0.47px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)' }}></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(0.94px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)' }}></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(1.88px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)' }}></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(3.75px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)' }}></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(7.5px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)' }}></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(15px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)' }}></div>
        </div>
      </div>
    )
}