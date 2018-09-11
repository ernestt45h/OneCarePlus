class BaseModel {


	/**
	 * Takes a mongoose schema
	 * @param {Object} model:Object 
	 */
  constructor(model) {
    this.model = model
	}

	/**
	 * 
	 * Finds a documents in a collection 
	 * 
	 * @param {Object} condition 
	 * @param {String} fields 
	 * @param {Number} limit 
	 */
  async find(condition, fields, limit) {
		return this.model.find(condition, fields).then((result) => {
			console.log(result)
			return result
    }).catch((err) => {
      res.json(err)
      throw err
    })
  }

	/**
	 * 
	 * finds a single document in a collection 
	 * by providing the conditions
	 * the fields are the output you would want back
	 * 
	 * @param {Object} condition 
	 * @param {String} fields 
	 */
  async findOne(condition, fields) {
    return this.model.findOne(condition, fields).then((result) => {
      return result
    }).catch((err) => {
      throw err
    })
  }

  async findById(condition, fields, limit){
		let query = this.model.find(condition, fields)
		if(limit){
			query.limit(limit)
		}
    return query.exec((result) => {	return result
		}).catch((err) => {
			throw err
		});
  }

	async findOneById(condition, fields){
		return this.model.findOneById(condition, fields).then((result) => {
			return result
		}).catch((err) => {
			throw err
		});
	}

	async count(condition){
		return this.model.count(condition, (e)=>{
			return e
		})
	}

	async remove(condition){
		return this.model.remove(condition, (e)=>{
			return e || true
		})
	}

	async update(conditions, update, options){
		return this.model.update(conditions, update, options, (err, numAffected)=>{
			if(err) throw err
			return numAffected
		})
	}

	async save(document){
		let doc = this.model(document)
		return doc.save()
	}

}

module.exports = BaseModel
