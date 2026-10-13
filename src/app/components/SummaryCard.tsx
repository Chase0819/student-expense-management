type SummaryCardProps = {
    title: string;
    value: number;
  };
  export function SummaryCard(props: SummaryCardProps) {
    return (
      <div className = "bg-white rounded-xl shadow-md p-6">
        <h2 className = "text-sm text-gray-500"> {props.title}</h2>
        <p className = "text-2xl font-bold text-gray-900"> {props.value}</p>
      </div> 
  
    ); 
  }