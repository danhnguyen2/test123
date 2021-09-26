import React, { Component } from 'react'
import { listVases } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayVases extends Component {

    state = {
        vases: []
    }

    componentDidMount = async () => {
        this.getVases()
    }


    getVases = async () => {
        const result = await API.graphql(graphqlOperation(listVases))

        this.setState({ vases: result.data.listVases.items })
        //console.log("All Vases: ", JSON.stringify(result.data.listVases.items))
        //console.log("All Vases: ", result.data.listVases.items)
    }


    render () {
        const { vases } = this.state
        
        return vases.map(( vase ) => {

            return (
                <div className="vases">
                    <p>
                        { "Painter: " } {vase.painter} <br />
                        { "Shape: " } {vase.shape} <br />
                        { "Entry: " } {vase.entry} <br />
                        { "Location: " } {vase.location} <br />
                        { "Vase Number: " } {vase.v_num} <br />
                        { "Notes: " } {vase.notes} <br />
                        { "Height: " } {vase.height} <br />
                        { "Diameter: " } {vase.diameter} <br />
                        { "Plate: " } {vase.plate} <br />
                        { "Reference: " } {vase.reference} <br />
                        { "Description: " } {vase.description} <br />
                    </p>
                </div>
            )
        })
    }
}
export default DisplayVases;