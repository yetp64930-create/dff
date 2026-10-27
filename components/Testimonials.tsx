import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section id="reviews">
      <div className="wrap">
        <div className="tag dark">Student Testimonials</div>
        <div className="head">
          <h2>What Candidates Say</h2>
          <p>
            Real feedback from students who achieved their NEBOSH qualifications with our support.
          </p>
        </div>

        <div className="reviewcards">
          {testimonials.map((review) => (
            <article className="review" key={review.name}>
              <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                {'★'.repeat(review.rating)}
              </div>
              <p>“{review.feedback}”</p>
              <strong>{review.name}</strong>
              <small>
                {review.role} • {review.location}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

