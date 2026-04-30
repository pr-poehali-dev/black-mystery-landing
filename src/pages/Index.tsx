const COVER_IMAGE = "https://cdn.poehali.dev/projects/b4b86a50-853e-4117-87f9-c0d94ace6e0f/bucket/87c39a0e-3574-4bfa-906d-17657730a7a5.jpg";

export default function Index() {
  return (
    <div className="landing-root">
      <div className="bg-glow" />

      <p className="author-name">ФАРГАТ ЗАКИРОВ</p>

      <h1 className="book-title">
        Иллюзия<br />
        <span className="title-second">реальности</span>
      </h1>

      <div className="author-block">
        <p className="author-text">
          Я создал этот сайт, потому что пишу книгу. У меня нет громких рекламных кампаний. Только я, текст и желание, чтобы меня услышали. Книга рождается прямо сейчас. Вы видите всё, как есть. Мне удалось вас заинтриговать?
        </p>
      </div>

      <div className="genres">
        {["ФАНТАСТИКА", "ДЕТЕКТИВ", "ПСИХОЛОГИЧЕСКИЙ ТРИЛЛЕР"].map((g) => (
          <span key={g} className="genre-pill">{g}</span>
        ))}
      </div>

      <div className="annotation">
        <p>
          Алчный предприниматель хочет завладеть изобретением, способным изменить мир. Но так ли прост его создатель? Охотник становится жертвой в игре, где реальность переплетается с иллюзией, а человечность проверяется на прочность.
        </p>
      </div>

      <div className="cta-block">
        <a href="#" className="btn btn-red">Читать книгу</a>
        <a href="#" className="btn btn-blue">Узнать больше</a>
      </div>

      <p className="cta-phrase">
        Выбор за вами. Но помните: реальность&nbsp;— всего лишь иллюзия
      </p>
    </div>
  );
}
