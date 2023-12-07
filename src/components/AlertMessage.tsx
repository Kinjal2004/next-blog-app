type AlertText = {
    text: string;
  };
  
  export default function Alert(props: AlertText) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
        <div className="bg-white p-8 rounded-md shadow-md">
          <div className="text-lg text-black">{props.text}</div>
        </div>
      </div>
    );
  }
  