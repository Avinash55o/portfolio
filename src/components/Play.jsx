import { useEffect, useRef, useState, useCallback } from 'react'

function JumpingSquareGame() {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  
  // Mathematical values from the TypeScript code
  const CANVAS_WIDTH = 600
  const CANVAS_HEIGHT = 300
  const SQUARE_SIZE = 30
  const GRAVITY = 0.6
  const JUMP_FORCE = -12
  const OBSTACLE_WIDTH = 20
  const OBSTACLE_GAP = 200
  const GAME_SPEED = 4

  const playerRef = useRef({ y: CANVAS_HEIGHT - SQUARE_SIZE - 20, velocity: 0 })
  const obstaclesRef = useRef([])
  const scoreRef = useRef(0)
  
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const isMountedRef = useRef(true)

  const jump = useCallback(() => {
    if (!isPlaying && !isGameOver) {
      startGame()
      return
    }
    if (isPlaying && !isGameOver) {
      playerRef.current.velocity = JUMP_FORCE
    }
  }, [isPlaying, isGameOver])

  const startGame = useCallback(() => {
    playerRef.current = { y: CANVAS_HEIGHT - SQUARE_SIZE - 20, velocity: 0 }
    obstaclesRef.current = []
    scoreRef.current = 0
    setScore(0)
    setIsGameOver(false)
    setIsPlaying(true)
  }, [])

  const resetGame = useCallback(() => {
    playerRef.current = { y: CANVAS_HEIGHT - SQUARE_SIZE - 20, velocity: 0 }
    obstaclesRef.current = []
    scoreRef.current = 0
    setScore(0)
    setIsGameOver(false)
    setIsPlaying(false)
  }, [])

  const handleKeyPress = useCallback((e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault()
      if (isGameOver) {
        resetGame()
      } else {
        jump()
      }
    }
  }, [jump, isGameOver, resetGame])

  const handleTouch = useCallback((e) => {
    e.preventDefault()
    if (isGameOver) {
      resetGame()
    } else {
      jump()
    }
  }, [jump, isGameOver, resetGame])

  // Game loop
  useEffect(() => {
    if (!isPlaying || isGameOver) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const gameLoop = () => {
      if (!isMountedRef.current || !isPlaying) return

      const player = playerRef.current
      const obstacles = obstaclesRef.current

      // Update player
      player.velocity += GRAVITY
      player.y += player.velocity

      // Ground collision
      const groundY = CANVAS_HEIGHT - SQUARE_SIZE - 20
      if (player.y > groundY) {
        player.y = groundY
        player.velocity = 0
      }

      // Ceiling collision
      if (player.y < 0) {
        player.y = 0
        player.velocity = 0
      }

      // Spawn obstacles (using the TypeScript logic)
      if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < CANVAS_WIDTH - OBSTACLE_GAP) {
        const height = Math.random() * 60 + 30
        obstacles.push({ x: CANVAS_WIDTH, height })
      }

      // Update obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= GAME_SPEED

        // Remove off-screen obstacles and increment score
        if (obstacles[i].x + OBSTACLE_WIDTH < 0) {
          obstacles.splice(i, 1)
          scoreRef.current += 1
          setScore(scoreRef.current)
        }
      }

      // Collision detection
      const playerBox = {
        x: 50,
        y: player.y,
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
      }

      for (const obstacle of obstacles) {
        const obstacleBox = {
          x: obstacle.x,
          y: CANVAS_HEIGHT - obstacle.height - 20,
          width: OBSTACLE_WIDTH,
          height: obstacle.height,
        }

        if (
          playerBox.x < obstacleBox.x + obstacleBox.width &&
          playerBox.x + playerBox.width > obstacleBox.x &&
          playerBox.y < obstacleBox.y + obstacleBox.height &&
          playerBox.y + playerBox.height > obstacleBox.y
        ) {
          setHighScore((prev) => Math.max(prev, scoreRef.current))
          setIsGameOver(true)
          setIsPlaying(false)
          return
        }
      }

      // Clear canvas
      ctx.fillStyle = '#1a1a1a'
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      // Draw ground
      ctx.fillStyle = '#333'
      ctx.fillRect(0, CANVAS_HEIGHT - 20, CANVAS_WIDTH, 20)

      // Draw player
      ctx.fillStyle = '#3b82f6'
      ctx.fillRect(50, player.y, SQUARE_SIZE, SQUARE_SIZE)

      // Draw obstacles
      ctx.fillStyle = '#ef4444'
      for (const obstacle of obstacles) {
        ctx.fillRect(
          obstacle.x,
          CANVAS_HEIGHT - obstacle.height - 20,
          OBSTACLE_WIDTH,
          obstacle.height
        )
      }

      // Draw score
      ctx.fillStyle = '#fff'
      ctx.font = '16px Arial'
      ctx.fillText(`Score: ${scoreRef.current}`, 10, 25)

      if (isMountedRef.current && isPlaying) {
        animationFrameRef.current = requestAnimationFrame(gameLoop)
      }
    }

    animationFrameRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isPlaying, isGameOver])

  // Draw idle/gameover state
  useEffect(() => {
    if (isPlaying && !isGameOver) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = '#1a1a1a'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Draw ground
    ctx.fillStyle = '#333'
    ctx.fillRect(0, CANVAS_HEIGHT - 20, CANVAS_WIDTH, 20)

    // Draw player
    ctx.fillStyle = '#3b82f6'
    ctx.fillRect(50, CANVAS_HEIGHT - SQUARE_SIZE - 20, SQUARE_SIZE, SQUARE_SIZE)

    ctx.fillStyle = '#fff'
    ctx.font = 'bold 20px Arial'
    ctx.textAlign = 'center'

    if (!isPlaying && !isGameOver) {
      ctx.fillText('Press SPACE or tap to start', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
    } else if (isGameOver) {
      ctx.fillText('Game Over!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20)
      ctx.font = '16px Arial'
      ctx.fillText(`Score: ${score} | High Score: ${highScore}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 10)
      ctx.fillText('Press SPACE or tap to restart', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 40)
    }

    ctx.textAlign = 'left'
  }, [isPlaying, isGameOver, score, highScore])

  // Event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.addEventListener('touchstart', handleTouch, { passive: false })
    canvas.addEventListener('click', jump)

    return () => {
      canvas.removeEventListener('touchstart', handleTouch)
      canvas.removeEventListener('click', jump)
    }
  }, [handleTouch, jump])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const handleCanvasClick = useCallback(() => {
    if (isGameOver) {
      resetGame()
    } else {
      jump()
    }
  }, [isGameOver, resetGame, jump])

  return (
    <div className="w-full flex flex-col gap-y-4 my-8">
      <div className="mx-auto">
        <h1 className="font-press dark:text-white">Jumping Square Game</h1>
        <p className="text-xs dark:text-white/60 text-center">End of the tour. Before you go, try this little game.</p>
      </div>
      <div className="mx-auto border dark:border-white/30 rounded-sm p-4 bg-white/5 dark:bg-black/20">
        <div className="flex flex-col items-center gap-3">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            onClick={handleCanvasClick}
            onTouchStart={(e) => {
              e.preventDefault()
              handleCanvasClick()
            }}
            className="border dark:border-white/20 rounded cursor-pointer touch-none"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {!isPlaying && !isGameOver && (
            <button
              onClick={startGame}
              className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold"
            >
              Play
            </button>
          )}
          <div className="text-xs dark:text-white/60 text-center">
            <p>Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">Space</kbd> or tap to jump</p>
          </div>
          {highScore > 0 && (
            <p className="text-xs dark:text-white/60">
              High Score: <span className="font-semibold text-blue-500">{highScore}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default JumpingSquareGame