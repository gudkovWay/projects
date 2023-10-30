import "./learn.scss";

export default function Learn() {
  return (
    <div className="learn">
      <h2 className="container__title">What Will You Learn</h2>
      <div className="learn__row">
        <div className="left-column">
          <div className="card">
            <div className="card__title">
              <h3>01</h3>
            </div>
            <p>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
          </div>
          <div className="card">
            <div className="card__title">
              <h3>02</h3>
            </div>
            <p>
              Consume streaming data using Spark Streaming, Flink, and Storm.
            </p>
          </div>
          <div className="card">
            <div className="card__title">
              <h3>03</h3>
            </div>
            <p>
              Choose an appropriate data storage technology for your application
            </p>
          </div>
          <div className="card">
            <div className="card__title">
              <h3>04</h3>
            </div>
            <p>
              Analyze non-relational data using HBase, Cassandra, and MongoDB.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="image__border">
            <img src="/img/self/self-2.png" alt="Self Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
