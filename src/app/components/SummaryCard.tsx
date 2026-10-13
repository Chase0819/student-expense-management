type SummaryCardProps = {
    title: string;
    value: number;
  };
  export function SummaryCard(props: SummaryCardProps) {
    return (
      <div>
        <h2> {props.title}</h2>
        <p> {props.value}</p>
      </div>
  
    ); 
  }