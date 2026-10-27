import { metrics } from '@/data/metrics';

export function Metrics() {
  return (
    <div className="metrics">
      <div className="wrap">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

