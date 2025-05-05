class Physics{

    static resolveSlow(moveStartPos, moveEndObj, obstcleObj, maxSteps = 50){
        let offset = new Vector2(moveEndObj.transform.x - moveStartPos.x, moveEndObj.transform.y - moveStartPos.y)

        for(let i=0; i<maxSteps; i++){
            let percent = i / maxSteps

            moveEndObj.transform.x = moveStartPos.x + offset.x * percent
            moveEndObj.transform.y = moveStartPos.y + offset.y * percent

            let collided = Collisions.inCollision(moveEndObj, obstcleObj)

            if(collided){
                percent = (i-1)/ maxSteps
                moveEndObj.transform.x = moveStartPos.x + offset.x * percent
                moveEndObj.transform.y = moveStartPos.y + offset.y * percent
                return true
            }
        }
        let percent = 1
        moveEndObj.transform.x = moveStartPos.x + offset.x * percent
        moveEndObj.transform.y = moveStartPos.y + offset.y * percent
    }

    static resolvePrecise(moveStartPos, moveEndObj, obstcleObj, maxSteps = 50){
        let offset = new Vector2(moveEndObj.transform.x - moveStartPos.x, moveEndObj.transform.y - moveStartPos.y)

        if(!Collisions.inCollision(moveEndObj, obstcleObj))
            return false

        moveEndObj.transform.x = offset.x
        moveEndObj.transform.y = offset.y

        if(Collisions.inCollision(moveEndObj, obstcleObj))
            return true

        let lastNonCollsision = 0

        let lastCollsision = 1

        let nextGuess = (lastCollsision + lastNonCollsision) / 2

        for(let i=0; i<maxSteps; i++){
            moveEndObj.transform.x = moveStartPos.x * offset.x * nextGuess
            moveEndObj.transform.y = moveStartPos.y * offset.y * nextGuess

            if(Collisions.inCollision(moveEndObj, obstcleObj)){
                lastCollsision = nextGuess
            }else{
                lastNonCollsision = nextGuess
            }

            nextGuess = (lastCollsision + lastNonCollsision) / 2

        }

        moveEndObj.transform.x = moveStartPos.x * offset.x * lastNonCollsision
        moveEndObj.transform.y = moveStartPos.y * offset.y * lastNonCollsision

        return true

    }

    static findNearestCollisionTime(moveStartPos, moveEndObj, obstcleObjs, maxSteps = 50){
        let storedEndPos = Vector2.fromGameObject(moveEndObj)
        let minDist = Vector2.fromGameObject(moveEndObj).minus(moveStartPos)
        let minObst = undefined
        let minFinalLoc = Vector2.fromGameObject(moveEndObj)

        for(let obst of obstcleObjs){
            moveEndObj.transform.x = storedEndPos.x
            moveEndObj.transform.y = storedEndPos.y

            Physics.resolvePrecise(moveStartPos, moveEndObj, obst)
            let dist = Vector2.fromGameObject(moveEndObj).minus(moveStartPos).length()

            if(dist < minDist){
                minDist = dist
                minObst = obst
                minFinalLoc = Vector2.fromGameObject(moveEndObj)
            }
        }

        return [minDist, minObst, minFinalLoc]
    }
}