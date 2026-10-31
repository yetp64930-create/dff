import { freeResources } from '@/data/resources';
import { whatsappLink } from '@/lib/site';
import { FileText, BookOpen, CheckSquare, Lightbulb, Download, ArrowUpRight } from 'lucide-react';

export function FreeResources() {
  const iconMap: Record<string, any> = {
    'ig1-samples': FileText,
    'command-words': BookOpen,
    'ig2-checklist': CheckSquare,
    'interview-tips': Lightbulb,
  };

  return (
    <section className="section-resources" id="resources">
      <div className="wrap">
        <div className="section-head">
          <div className="badge-pill badge-emerald">
            <span className="pulse-dot" />
            <span>Free Resources</span>
          </div>
          <h2>
            Helpful Resources for <br />
            <span className="text-gradient">NEBOSH Students</span>
          </h2>
          <div style={{ margin: '8px 0 14px' }}>
            <span className="sticker-handwritten">
              Learn • Apply • Succeed <span>↗</span>
            </span>
          </div>
          <p>
            Access curated study guides, model answers, and practical checklists designed to support
            your independent preparation.
          </p>
        </div>

        <div className="resources-grid">
          {freeResources.map((item) => {
            const IconComponent = iconMap[item.id] || FileText;

            return (
              <div className="resource-card" key={item.id}>
                {/* Top Badge & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div
                    className="resource-icon-wrap"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      padding: '3px 9px',
                      borderRadius: 99,
                      backgroundColor: `${item.color}12`,
                      color: item.color,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, marginBottom: 12 }}>
                  {item.fileHint}
                </div>

                <a
                  href={whatsappLink(`Hello SafetyScript, I would like to get the free resource: "${item.title}". Please share the copy!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-btn"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                >
                  {item.id === 'ig1-samples' ? <Download size={14} /> : <ArrowUpRight size={14} />}
                  <span>{item.actionText}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

