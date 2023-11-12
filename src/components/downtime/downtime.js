import React from "react";
import { Link } from "react-router-dom";
import "./downtime.css";

function Downtime() {
  return (
    <div className="downtime-container">
      <h1> Downtime Activities </h1>
      <hr></hr>
      <div className="downtime-list">
        <Link to="/downtime/carousing" className="downtime-card">
          <div className="downtime-card-bg carousing">
            <div className="downtime-header">
              <h2> CAROUSING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/crafting" className="downtime-card">
          <div className="downtime-card-bg crafting">
            <div className="downtime-header">
              <h2> CRAFTING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/crime" className="downtime-card">
          <div className="downtime-card-bg crime">
            <div className="downtime-header">
              <h2> CRIME </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/gambling" className="downtime-card">
          <div className="downtime-card-bg gambling">
            <div className="downtime-header">
              <h2> GAMBLING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/monster-hunting" className="downtime-card">
          <div className="downtime-card-bg monster-hunting">
            <div className="downtime-header">
              <h2> MONSTER HUNTING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/pit-fighting" className="downtime-card">
          <div className="downtime-card-bg pit-fighting">
            <div className="downtime-header">
              <h2> PIT FIGHTING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/relaxation" className="downtime-card">
          <div className="downtime-card-bg relaxation">
            <div className="downtime-header">
              <h2> RELAXATION </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/religious-service" className="downtime-card">
          <div className="downtime-card-bg religious-service">
            <div className="downtime-header">
              <h2> RELIGIOUS SERVICE </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/research" className="downtime-card">
          <div className="downtime-card-bg research">
            <div className="downtime-header">
              <h2> RESEARCH </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/scribing" className="downtime-card">
          <div className="downtime-card-bg scribing">
            <div className="downtime-header">
              <h2> SCRIBING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/selling-magic-items" className="downtime-card">
          <div className="downtime-card-bg selling-magic-items">
            <div className="downtime-header">
              <h2> SELLING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/spellwrought-tattoos" className="downtime-card">
          <div className="downtime-card-bg spellwrought-tattoos">
            <div className="downtime-header">
              <h2> SPELLWROUGHT TATTOOS </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/taming-animals" className="downtime-card">
          <div className="downtime-card-bg training-animals">
            <div className="downtime-header">
              <h2> TRAINING ANIMALS </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/training" className="downtime-card">
          <div className="downtime-card-bg training">
            <div className="downtime-header">
              <h2> TRAINING </h2>
            </div>
          </div>
        </Link>

        <Link to="/downtime/work" className="downtime-card">
          <div className="downtime-card-bg work">
            <div className="downtime-header">
              <h2> WORK </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Downtime;
