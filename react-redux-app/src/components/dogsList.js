import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDogs } from '../store/actions/index'
import axios from 'axios';

const DogsList = (props) => {
    useEffect(() => {
      axios.get('https://aws.random.cat/meow')
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.log(err.message)
      })

    //     props.fetchDogs()
    }, [])

    // if (props.isLoading) {
    //     return <p>Loading missions data...</p>
    // }
    console.log(props.dogs)
    return (
        <div>
          <h2>My dawgs</h2>
          {props.isLoading ? <p>Loading my dawgs...</p> : null}
          {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
          {props.dogs.map((dog) => (
            <div>
              <img src={dog} />
            </div>
          ))}
        </div>
      );
    };

// we need the following state properties
// isLoading, dogs, error

const mapStateToProps = (state) => {
    return {
        // isLoading: state.isLoading,
        dogs: state.dogsData,
        // error: state.error
    }
}

export default connect(mapStateToProps, { fetchDogs })(DogsList)